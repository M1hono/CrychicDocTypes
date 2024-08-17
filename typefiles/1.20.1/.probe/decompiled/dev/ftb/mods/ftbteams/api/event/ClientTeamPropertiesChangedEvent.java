package dev.ftb.mods.ftbteams.api.event;

import dev.ftb.mods.ftbteams.api.Team;
import dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection;

public class ClientTeamPropertiesChangedEvent {

    private final Team team;

    private final TeamPropertyCollection old;

    public ClientTeamPropertiesChangedEvent(Team t, TeamPropertyCollection p) {
        this.team = t;
        this.old = p;
    }

    public Team getTeam() {
        return this.team;
    }

    public TeamPropertyCollection getOldProperties() {
        return this.old;
    }
}