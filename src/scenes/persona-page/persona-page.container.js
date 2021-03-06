import { connect } from "react-redux";
import { PersonaPageComponent } from "./persona-page.component";
import { personasConnector } from "./store/persona-page.selectors";
import {
  setIncome,
  setProvince,
  setLawyer,
  setLocationType,
  setModal
} from "./store/persona-page.actions";

const dispatchers = {
  setIncome,
  setProvince,
  setLawyer,
  setLocationType,
  setModal
};

export const PersonaPageContainer = connect(
  personasConnector,
  dispatchers
)(PersonaPageComponent);
