package me.jellysquid.mods.sodium.client.render.chunk;

import it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap;
import java.util.Map;
import me.jellysquid.mods.sodium.client.gl.attribute.GlVertexFormat;
import me.jellysquid.mods.sodium.client.gl.device.CommandList;
import me.jellysquid.mods.sodium.client.gl.device.RenderDevice;
import me.jellysquid.mods.sodium.client.gl.shader.GlProgram;
import me.jellysquid.mods.sodium.client.gl.shader.GlShader;
import me.jellysquid.mods.sodium.client.gl.shader.ShaderConstants;
import me.jellysquid.mods.sodium.client.gl.shader.ShaderLoader;
import me.jellysquid.mods.sodium.client.gl.shader.ShaderType;
import me.jellysquid.mods.sodium.client.render.chunk.shader.ChunkFogMode;
import me.jellysquid.mods.sodium.client.render.chunk.shader.ChunkShaderInterface;
import me.jellysquid.mods.sodium.client.render.chunk.shader.ChunkShaderOptions;
import me.jellysquid.mods.sodium.client.render.chunk.terrain.TerrainRenderPass;
import me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkMeshAttribute;
import me.jellysquid.mods.sodium.client.render.chunk.vertex.format.ChunkVertexType;
import net.minecraft.resources.ResourceLocation;

public abstract class ShaderChunkRenderer implements ChunkRenderer {

    private final Map<ChunkShaderOptions, GlProgram<ChunkShaderInterface>> programs = new Object2ObjectOpenHashMap();

    protected final ChunkVertexType vertexType;

    protected final GlVertexFormat<ChunkMeshAttribute> vertexFormat;

    protected final RenderDevice device;

    protected GlProgram<ChunkShaderInterface> activeProgram;

    public ShaderChunkRenderer(RenderDevice device, ChunkVertexType vertexType) {
        this.device = device;
        this.vertexType = vertexType;
        this.vertexFormat = vertexType.getVertexFormat();
    }

    protected GlProgram<ChunkShaderInterface> compileProgram(ChunkShaderOptions options) {
        GlProgram<ChunkShaderInterface> program = (GlProgram<ChunkShaderInterface>) this.programs.get(options);
        if (program == null) {
            this.programs.put(options, program = this.createShader("blocks/block_layer_opaque", options));
        }
        return program;
    }

    private GlProgram<ChunkShaderInterface> createShader(String path, ChunkShaderOptions options) {
        ShaderConstants constants = options.constants();
        GlShader vertShader = ShaderLoader.loadShader(ShaderType.VERTEX, new ResourceLocation("sodium", path + ".vsh"), constants);
        GlShader fragShader = ShaderLoader.loadShader(ShaderType.FRAGMENT, new ResourceLocation("sodium", path + ".fsh"), constants);
        GlProgram var6;
        try {
            var6 = GlProgram.builder(new ResourceLocation("sodium", "chunk_shader")).attachShader(vertShader).attachShader(fragShader).bindAttribute("a_PosId", 0).bindAttribute("a_Color", 1).bindAttribute("a_TexCoord", 2).bindAttribute("a_LightCoord", 3).bindFragmentData("fragColor", 0).link(shader -> new ChunkShaderInterface(shader, options));
        } finally {
            vertShader.delete();
            fragShader.delete();
        }
        return var6;
    }

    protected void begin(TerrainRenderPass pass) {
        pass.startDrawing();
        ChunkShaderOptions options = new ChunkShaderOptions(ChunkFogMode.SMOOTH, pass, this.vertexType);
        this.activeProgram = this.compileProgram(options);
        this.activeProgram.bind();
        this.activeProgram.getInterface().setupState();
    }

    protected void end(TerrainRenderPass pass) {
        this.activeProgram.unbind();
        this.activeProgram = null;
        pass.endDrawing();
    }

    @Override
    public void delete(CommandList commandList) {
        this.programs.values().forEach(GlProgram::delete);
    }

    @Override
    public ChunkVertexType getVertexType() {
        return this.vertexType;
    }
}