import src from "./i18n-children";

export default src.map( ({ path, name }) => ({ path: `/${path}`, name }) );
