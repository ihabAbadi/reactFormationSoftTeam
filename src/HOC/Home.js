import {BaseComponent} from "./BaseComponent"
import {HocComponent} from "./HocComponent"

export const NewComponent = HocComponent(BaseComponent, "specialité")