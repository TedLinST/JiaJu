/**
 * Created by Z.cr on 2018-2-2.
 */

export class KeyComboboxOption {
    data: any;
    id: string;
    text: string;
    url: string;
    group: string;
    dummy: boolean = false;

    constructor(source: any) {
        if (typeof source === "string") {
            this.id = this.text = source;
        }
        if (typeof source === "object") {
            this.id = source.id || source.text;
            this.text = source.text;
            this.url = source.url;
            this.group = source.group;
            this.dummy = source.dummy ? source.dummy : false;
        }
        this.data = source;
    }

}
