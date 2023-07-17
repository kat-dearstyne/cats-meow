import Service from "./Service.js";
import Parse from "parse";


class AdoptServiceClass extends Service {
    async createObject(data) {
        const MyObject = Parse.Object.extend(this.className);
        const object = new MyObject();


        for (const key in data) {
            if (key === "user")
            {
                const User = Parse.Object.extend('User');
                const query = new Parse.Query(User);
                query.equalTo('objectId', data[key]);
                const user = await query.first();
                const relation = object.relation(key);
                relation.add(user);
            }else{

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