package com.github.alexthe666.citadel.repack.jcodec.codecs.h264.io.write;

import com.github.alexthe666.citadel.repack.jcodec.codecs.h264.io.model.PictureParameterSet;
import com.github.alexthe666.citadel.repack.jcodec.codecs.h264.io.model.RefPicMarking;
import com.github.alexthe666.citadel.repack.jcodec.codecs.h264.io.model.RefPicMarkingIDR;
import com.github.alexthe666.citadel.repack.jcodec.codecs.h264.io.model.SeqParameterSet;
import com.github.alexthe666.citadel.repack.jcodec.codecs.h264.io.model.SliceHeader;
import com.github.alexthe666.citadel.repack.jcodec.codecs.h264.io.model.SliceType;
import com.github.alexthe666.citadel.repack.jcodec.common.io.BitWriter;
import com.github.alexthe666.citadel.repack.jcodec.common.model.ColorSpace;

public class SliceHeaderWriter {

    private SliceHeaderWriter() {
    }

    public static void write(SliceHeader sliceHeader, boolean idrSlice, int nalRefIdc, BitWriter writer) {
        SeqParameterSet sps = sliceHeader.sps;
        PictureParameterSet pps = sliceHeader.pps;
        CAVLCWriter.writeUEtrace(writer, sliceHeader.firstMbInSlice, "SH: first_mb_in_slice");
        CAVLCWriter.writeUEtrace(writer, sliceHeader.sliceType.ordinal() + (sliceHeader.sliceTypeRestr ? 5 : 0), "SH: slice_type");
        CAVLCWriter.writeUEtrace(writer, sliceHeader.picParameterSetId, "SH: pic_parameter_set_id");
        if (sliceHeader.frameNum > 1 << sps.log2MaxFrameNumMinus4 + 4) {
            throw new IllegalArgumentException("frame_num > " + (1 << sps.log2MaxFrameNumMinus4 + 4));
        } else {
            CAVLCWriter.writeUtrace(writer, sliceHeader.frameNum, sps.log2MaxFrameNumMinus4 + 4, "SH: frame_num");
            if (!sps.frameMbsOnlyFlag) {
                CAVLCWriter.writeBool(writer, sliceHeader.fieldPicFlag, "SH: field_pic_flag");
                if (sliceHeader.fieldPicFlag) {
                    CAVLCWriter.writeBool(writer, sliceHeader.bottomFieldFlag, "SH: bottom_field_flag");
                }
            }
            if (idrSlice) {
                CAVLCWriter.writeUEtrace(writer, sliceHeader.idrPicId, "SH: idr_pic_id");
            }
            if (sps.picOrderCntType == 0) {
                if (sliceHeader.picOrderCntLsb > 1 << sps.log2MaxPicOrderCntLsbMinus4 + 4) {
                    throw new IllegalArgumentException("pic_order_cnt_lsb > " + (1 << sps.log2MaxPicOrderCntLsbMinus4 + 4));
                }
                CAVLCWriter.writeU(writer, sliceHeader.picOrderCntLsb, sps.log2MaxPicOrderCntLsbMinus4 + 4);
                if (pps.picOrderPresentFlag && !sps.fieldPicFlag) {
                    CAVLCWriter.writeSEtrace(writer, sliceHeader.deltaPicOrderCntBottom, "SH: delta_pic_order_cnt_bottom");
                }
            }
            if (sps.picOrderCntType == 1 && !sps.deltaPicOrderAlwaysZeroFlag) {
                CAVLCWriter.writeSEtrace(writer, sliceHeader.deltaPicOrderCnt[0], "SH: delta_pic_order_cnt");
                if (pps.picOrderPresentFlag && !sps.fieldPicFlag) {
                    CAVLCWriter.writeSEtrace(writer, sliceHeader.deltaPicOrderCnt[1], "SH: delta_pic_order_cnt");
                }
            }
            if (pps.redundantPicCntPresentFlag) {
                CAVLCWriter.writeUEtrace(writer, sliceHeader.redundantPicCnt, "SH: redundant_pic_cnt");
            }
            if (sliceHeader.sliceType == SliceType.B) {
                CAVLCWriter.writeBool(writer, sliceHeader.directSpatialMvPredFlag, "SH: direct_spatial_mv_pred_flag");
            }
            if (sliceHeader.sliceType == SliceType.P || sliceHeader.sliceType == SliceType.SP || sliceHeader.sliceType == SliceType.B) {
                CAVLCWriter.writeBool(writer, sliceHeader.numRefIdxActiveOverrideFlag, "SH: num_ref_idx_active_override_flag");
                if (sliceHeader.numRefIdxActiveOverrideFlag) {
                    CAVLCWriter.writeUEtrace(writer, sliceHeader.numRefIdxActiveMinus1[0], "SH: num_ref_idx_l0_active_minus1");
                    if (sliceHeader.sliceType == SliceType.B) {
                        CAVLCWriter.writeUEtrace(writer, sliceHeader.numRefIdxActiveMinus1[1], "SH: num_ref_idx_l1_active_minus1");
                    }
                }
            }
            writeRefPicListReordering(sliceHeader, writer);
            if (pps.weightedPredFlag && (sliceHeader.sliceType == SliceType.P || sliceHeader.sliceType == SliceType.SP) || pps.weightedBipredIdc == 1 && sliceHeader.sliceType == SliceType.B) {
                writePredWeightTable(sliceHeader, writer);
            }
            if (nalRefIdc != 0) {
                writeDecRefPicMarking(sliceHeader, idrSlice, writer);
            }
            if (pps.entropyCodingModeFlag && sliceHeader.sliceType.isInter()) {
                CAVLCWriter.writeUEtrace(writer, sliceHeader.cabacInitIdc, "SH: cabac_init_idc");
            }
            CAVLCWriter.writeSEtrace(writer, sliceHeader.sliceQpDelta, "SH: slice_qp_delta");
            if (sliceHeader.sliceType == SliceType.SP || sliceHeader.sliceType == SliceType.SI) {
                if (sliceHeader.sliceType == SliceType.SP) {
                    CAVLCWriter.writeBool(writer, sliceHeader.spForSwitchFlag, "SH: sp_for_switch_flag");
                }
                CAVLCWriter.writeSEtrace(writer, sliceHeader.sliceQsDelta, "SH: slice_qs_delta");
            }
            if (pps.deblockingFilterControlPresentFlag) {
                CAVLCWriter.writeUEtrace(writer, sliceHeader.disableDeblockingFilterIdc, "SH: disable_deblocking_filter_idc");
                if (sliceHeader.disableDeblockingFilterIdc != 1) {
                    CAVLCWriter.writeSEtrace(writer, sliceHeader.sliceAlphaC0OffsetDiv2, "SH: slice_alpha_c0_offset_div2");
                    CAVLCWriter.writeSEtrace(writer, sliceHeader.sliceBetaOffsetDiv2, "SH: slice_beta_offset_div2");
                }
            }
            if (pps.numSliceGroupsMinus1 > 0 && pps.sliceGroupMapType >= 3 && pps.sliceGroupMapType <= 5) {
                int len = (sps.picHeightInMapUnitsMinus1 + 1) * (sps.picWidthInMbsMinus1 + 1) / (pps.sliceGroupChangeRateMinus1 + 1);
                if ((sps.picHeightInMapUnitsMinus1 + 1) * (sps.picWidthInMbsMinus1 + 1) % (pps.sliceGroupChangeRateMinus1 + 1) > 0) {
                    len++;
                }
                len = CeilLog2(len + 1);
                CAVLCWriter.writeU(writer, sliceHeader.sliceGroupChangeCycle, len);
            }
        }
    }

    private static int CeilLog2(int uiVal) {
        int uiTmp = uiVal - 1;
        int uiRet;
        for (uiRet = 0; uiTmp != 0; uiRet++) {
            uiTmp >>= 1;
        }
        return uiRet;
    }

    private static void writeDecRefPicMarking(SliceHeader sliceHeader, boolean idrSlice, BitWriter writer) {
        if (idrSlice) {
            RefPicMarkingIDR drpmidr = sliceHeader.refPicMarkingIDR;
            CAVLCWriter.writeBool(writer, drpmidr.isDiscardDecodedPics(), "SH: no_output_of_prior_pics_flag");
            CAVLCWriter.writeBool(writer, drpmidr.isUseForlongTerm(), "SH: long_term_reference_flag");
        } else {
            CAVLCWriter.writeBool(writer, sliceHeader.refPicMarkingNonIDR != null, "SH: adaptive_ref_pic_marking_mode_flag");
            if (sliceHeader.refPicMarkingNonIDR != null) {
                RefPicMarking drpmidr = sliceHeader.refPicMarkingNonIDR;
                RefPicMarking.Instruction[] instructions = drpmidr.getInstructions();
                for (int i = 0; i < instructions.length; i++) {
                    RefPicMarking.Instruction mmop = instructions[i];
                    switch(mmop.getType()) {
                        case REMOVE_SHORT:
                            CAVLCWriter.writeUEtrace(writer, 1, "SH: memory_management_control_operation");
                            CAVLCWriter.writeUEtrace(writer, mmop.getArg1() - 1, "SH: difference_of_pic_nums_minus1");
                            break;
                        case REMOVE_LONG:
                            CAVLCWriter.writeUEtrace(writer, 2, "SH: memory_management_control_operation");
                            CAVLCWriter.writeUEtrace(writer, mmop.getArg1(), "SH: long_term_pic_num");
                            break;
                        case CONVERT_INTO_LONG:
                            CAVLCWriter.writeUEtrace(writer, 3, "SH: memory_management_control_operation");
                            CAVLCWriter.writeUEtrace(writer, mmop.getArg1() - 1, "SH: difference_of_pic_nums_minus1");
                            CAVLCWriter.writeUEtrace(writer, mmop.getArg2(), "SH: long_term_frame_idx");
                            break;
                        case TRUNK_LONG:
                            CAVLCWriter.writeUEtrace(writer, 4, "SH: memory_management_control_operation");
                            CAVLCWriter.writeUEtrace(writer, mmop.getArg1() + 1, "SH: max_long_term_frame_idx_plus1");
                            break;
                        case CLEAR:
                            CAVLCWriter.writeUEtrace(writer, 5, "SH: memory_management_control_operation");
                            break;
                        case MARK_LONG:
                            CAVLCWriter.writeUEtrace(writer, 6, "SH: memory_management_control_operation");
                            CAVLCWriter.writeUEtrace(writer, mmop.getArg1(), "SH: long_term_frame_idx");
                    }
                }
                CAVLCWriter.writeUEtrace(writer, 0, "SH: memory_management_control_operation");
            }
        }
    }

    private static void writePredWeightTable(SliceHeader sliceHeader, BitWriter writer) {
        SeqParameterSet sps = sliceHeader.sps;
        CAVLCWriter.writeUEtrace(writer, sliceHeader.predWeightTable.lumaLog2WeightDenom, "SH: luma_log2_weight_denom");
        if (sps.chromaFormatIdc != ColorSpace.MONO) {
            CAVLCWriter.writeUEtrace(writer, sliceHeader.predWeightTable.chromaLog2WeightDenom, "SH: chroma_log2_weight_denom");
        }
        writeOffsetWeight(sliceHeader, writer, 0);
        if (sliceHeader.sliceType == SliceType.B) {
            writeOffsetWeight(sliceHeader, writer, 1);
        }
    }

    private static void writeOffsetWeight(SliceHeader sliceHeader, BitWriter writer, int list) {
        SeqParameterSet sps = sliceHeader.sps;
        int defaultLW = 1 << sliceHeader.predWeightTable.lumaLog2WeightDenom;
        int defaultCW = 1 << sliceHeader.predWeightTable.chromaLog2WeightDenom;
        for (int i = 0; i < sliceHeader.predWeightTable.lumaWeight[list].length; i++) {
            boolean flagLuma = sliceHeader.predWeightTable.lumaWeight[list][i] != defaultLW || sliceHeader.predWeightTable.lumaOffset[list][i] != 0;
            CAVLCWriter.writeBool(writer, flagLuma, "SH: luma_weight_l0_flag");
            if (flagLuma) {
                CAVLCWriter.writeSEtrace(writer, sliceHeader.predWeightTable.lumaWeight[list][i], "SH: luma_weight_l" + list);
                CAVLCWriter.writeSEtrace(writer, sliceHeader.predWeightTable.lumaOffset[list][i], "SH: luma_offset_l" + list);
            }
            if (sps.chromaFormatIdc != ColorSpace.MONO) {
                boolean flagChroma = sliceHeader.predWeightTable.chromaWeight[list][0][i] != defaultCW || sliceHeader.predWeightTable.chromaOffset[list][0][i] != 0 || sliceHeader.predWeightTable.chromaWeight[list][1][i] != defaultCW || sliceHeader.predWeightTable.chromaOffset[list][1][i] != 0;
                CAVLCWriter.writeBool(writer, flagChroma, "SH: chroma_weight_l0_flag");
                if (flagChroma) {
                    for (int j = 0; j < 2; j++) {
                        CAVLCWriter.writeSEtrace(writer, sliceHeader.predWeightTable.chromaWeight[list][j][i], "SH: chroma_weight_l" + list);
                        CAVLCWriter.writeSEtrace(writer, sliceHeader.predWeightTable.chromaOffset[list][j][i], "SH: chroma_offset_l" + list);
                    }
                }
            }
        }
    }

    private static void writeRefPicListReordering(SliceHeader sliceHeader, BitWriter writer) {
        if (sliceHeader.sliceType.isInter()) {
            boolean l0ReorderingPresent = sliceHeader.refPicReordering != null && sliceHeader.refPicReordering[0] != null;
            CAVLCWriter.writeBool(writer, l0ReorderingPresent, "SH: ref_pic_list_reordering_flag_l0");
            if (l0ReorderingPresent) {
                writeReorderingList(sliceHeader.refPicReordering[0], writer);
            }
        }
        if (sliceHeader.sliceType == SliceType.B) {
            boolean l1ReorderingPresent = sliceHeader.refPicReordering != null && sliceHeader.refPicReordering[1] != null;
            CAVLCWriter.writeBool(writer, l1ReorderingPresent, "SH: ref_pic_list_reordering_flag_l1");
            if (l1ReorderingPresent) {
                writeReorderingList(sliceHeader.refPicReordering[1], writer);
            }
        }
    }

    private static void writeReorderingList(int[][] reordering, BitWriter writer) {
        if (reordering != null) {
            for (int i = 0; i < reordering[0].length; i++) {
                CAVLCWriter.writeUEtrace(writer, reordering[0][i], "SH: reordering_of_pic_nums_idc");
                CAVLCWriter.writeUEtrace(writer, reordering[1][i], "SH: abs_diff_pic_num_minus1");
            }
            CAVLCWriter.writeUEtrace(writer, 3, "SH: reordering_of_pic_nums_idc");
        }
    }
}