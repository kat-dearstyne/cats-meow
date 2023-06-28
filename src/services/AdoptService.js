import Service from "./Service.js";
import Parse from "parse";


class AdoptServiceClass extends Service {
    async createObject(data) {
        const MyObject = Parse.Object.extend(this.className);
        const object = new MyObject();

        for (const key in data) {
            if (key === 'catPreference') {
                // Handling relation field 'catPreference'
                const Cat = Parse.Object.extend('Cat');
                const query = new Parse.Query(Cat);
                query.equalTo('name', data[key]);
                const catPreference = await query.first();
                const relation = object.relation(key);
                relation.add(catPreference);
            } else {
                object.set(key, data[key]);
            }
        }

        console.log("OBJECT SAVED:", object);
        return object.save().then((result) => {
            return result;
        });
    }

}
const AdoptService = new AdoptServiceClass("Adoption");
export default AdoptService;