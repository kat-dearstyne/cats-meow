import Parse from "parse";



export class Service {
  constructor(className) {
    this.className = className;
  }

  createObject(data) {
    const MyObject = Parse.Object.extend(this.className);
    const object = new MyObject();

    for (const key in data) {
      object.set(key, data[key]);
    }

    return object.save().then((result) => {
      return result;
    });
  }

  getObjectById(id) {
    const MyObject = Parse.Object.extend(this.className);
    const query = new Parse.Query(MyObject);

    return query.get(id).then((result) => {
      return result;
    });
  }

  getAllObjects() {
    const MyObject = Parse.Object.extend(this.className);
    let query = new Parse.Query(MyObject);
    // Include all fields of the objects in the response
    query = query.includeAll();
    const queryFind = query.find();

    return queryFind.then((results) => {
      return results;
    });
  }

  removeObject(id) {
    const MyObject = Parse.Object.extend(this.className);
    const query = new Parse.Query(MyObject);

    return query.get(id).then((object) => {
      return object.destroy();
    });
  }

  updateValue(id, column, value) {
    const obj = this.getObjectById(id);
    return obj.then((object) => {
      object.set(column, value);
      return object.save();
    });
  }

  getRowsByRelatedId(relatedColumn, relatedID) {
    const MyObject = Parse.Object.extend(this.className);
    const query = new Parse.Query(MyObject);

    // Create a query for the related object
    const relatedClass = relatedColumn.charAt(0).toUpperCase() + relatedColumn.slice(1);
    const innerQuery = new Parse.Query(relatedClass);
    innerQuery.equalTo("objectId", relatedID);

    // Set up the relational query
    query.matchesQuery(relatedColumn, innerQuery);
    query.include(relatedColumn);

    return query.find().then((results) => {
      return results;
    });
  }
}

export default Service;