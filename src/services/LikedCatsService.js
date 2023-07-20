import Service from "./Service.js";
import Parse from "parse";

class LikedCatsServiceClass extends Service {
  
    async likeCat(data) {
        const MyObject = Parse.Object.extend(this.className);
        const object = new MyObject();

        for (const key in data) {
        if (key === "user" || key === "cat") {
            const Class = Parse.Object.extend(key.charAt(0).toUpperCase() + key.slice(1));
            const obj = new Parse.Object(Class);
            obj.id = data[key];
            object.set(key, obj);
        } else {
            object.set(key, data[key]);
        }
        }

        console.log("OBJECT SAVED:", object);
        return object.save().then((result) => {
        return result.id;
        });
    }

    async checkIfLiked(userId, catId) {
        const query = new Parse.Query(this.className);
        const userPointer = {
        __type: 'Pointer',
        className: '_User',
        objectId: userId
        };
        const catPointer = {
        __type: 'Pointer',
        className: 'Cat',
        objectId: catId
        };
        query.equalTo('user', userPointer);
        query.equalTo('cat', catPointer);
        const result = await query.first();
        return result ? true : false;
    }

    async unlikeCat(userId, catId) {
        const query = new Parse.Query(this.className);
        query.equalTo('user', userId);
        query.equalTo('cat', catId);
        const likedCat = await query.first();
        return likedCat ? likedCat.destroy() : null;
    }
}

const LikedCatsService = new LikedCatsServiceClass("LikedCats");
export default LikedCatsService;
