package noppes.npcs.api.event;

import noppes.npcs.api.IPos;
import noppes.npcs.api.IWorld;
import noppes.npcs.api.entity.IEntity;

public class WorldEvent extends CustomNPCsEvent {

    public final IWorld world;

    public WorldEvent(IWorld world) {
        this.world = world;
    }

    public static class ScriptTriggerEvent extends WorldEvent {

        public final Object[] arguments;

        public final IPos pos;

        public final IEntity entity;

        public final int id;

        public ScriptTriggerEvent(int id, IWorld level, IPos pos, IEntity entity, Object[] arguments) {
            super(level);
            this.id = id;
            this.arguments = arguments;
            this.pos = pos;
            this.entity = entity;
        }
    }
}