//uuid pack is used
// generate ids for the inputs
import { v4 as uuid } from "uuid";

//services are used not related to the UI
export default function getNewId() {
  return uuid();
}
