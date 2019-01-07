import {errMessage} from "./helpers";

export default class Utils {

	URI = null;

    constructor(serverURI) {

        if (serverURI) {

			this.URI = serverURI;
		}
    }

    getStringObject(object) {

        return JSON.stringify(object)
    }

    create(table, data) {

        if (!table) return errMessage('TABLE');
        if (!this.URI) return errMessage('URI');

        const object = this.getStringObject(data);

        return `${this.URI}/?act=create&table=${table}&object=${object}`;
    }

    update(action, table, data, where) {

		if (!this.URI) return errMessage('URI');
        const object = this.getStringObject(data);
        const whereObj = this.getStringObject(where);

        return `${this.URI}/?act=${action}&table=${table}&object=${object}&where=${whereObj}`
    }

    delete(table, where) {

		if (!this.URI) return errMessage('URI');
        const whereObj = this.getStringObject(where);
        return `${this.URI}/?act=delete&table=${table}&where=${whereObj}`;
    }

    get(action, table, data, where) {

		if (!this.URI) return errMessage('URI');
        const object = this.getStringObject(data);
        const whereO = this.getStringObject(where);

        return `${this.URI}/?act=${action}&table=${table}&object=${object}&where=${whereO}`;
    }
}