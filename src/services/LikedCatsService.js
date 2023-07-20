import Service from "./Service.js";
import Parse from "parse";


class LikedCatsServiceClass extends Service {
    async createObject(data) {
        const MyObject = Parse.Object.extend(this.className);
        const object = new MyObject();


        for (const key in data) {
            if (key === "user" || key === "cat")
            {
                const Class = Parse.Object.extend(key.charAt(0).toUpperCase() + key.slice(1));
                const query = new Parse.Query(Class);
                query.equalTo('objectId', data[key]);
                const obj = await query.first();
                const relation = object.relation(key);
                relation.add(obj);
            }else{
                object.set(key, data[key]);
            }
        }


        console.log("OBJECT SAVED:", object);
        return object.save().then((result) => {
            return result;
        });
    }

    async getLikedCatsByUser(userId) {
        const UserClass = Parse.Object.extend('User');
        const user = new UserClass();
        user.id = userId;

        const query = new Parse.Query(this.className);
        query.equalTo('user', user);

        const results = await query.find();
        const likedCats = await Promise.all(
            results.map(async (result) => {
                const catRelation = result.relation('cat');
                const catQuery = catRelation.query();
                const cat = await catQuery.first();
                return cat;
            })
        );

        return likedCats;
    }
    
}

const LikedCatsService = new LikedCatsServiceClass("LikedCats");
export default LikedCatsService;