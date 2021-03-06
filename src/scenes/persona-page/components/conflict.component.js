import React from "react";

import { PersonaTextRegular, SectionHeader } from "../persona-page.styles";

export const Conflict = () => (
  <React.Fragment>
    <SectionHeader>What if</SectionHeader>
    <PersonaTextRegular>
      {`The costs and timing of a family law process can vary dramatically 
            depending on how much conflict there is between partners. The legal costs 
            in this scenario are based on a relatively low level of conflict. The legal 
            costs can escalate quickly. Longer court processes also take a toll on 
            people's well-being, increasing their health costs and other financial expenses.`}
    </PersonaTextRegular>
    <PersonaTextRegular>
      {`Mediation is a way to resolve some or all of the issues earlier, with less 
            conflict. Mediation can also be used at different points throughout the process, 
            narrowing the issues and simplifying the court process. However, mediation 
            is not an appropriate option for every situation. Some disputes cannot be mediated.`}
    </PersonaTextRegular>
    <PersonaTextRegular>
      {`This chart demonstrates what might happen to the costs if this scenario was 
            resolved early through mediation or if it escalated due to increasing conflict.`}
    </PersonaTextRegular>
  </React.Fragment>
);

Conflict.propTypes = {};
