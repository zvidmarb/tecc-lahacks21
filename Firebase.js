import * as firebase from "firebase";

export function setUpFirebase() {
    let firebaseConfig = {
        apiKey: "AIzaSyAmH9_AEc9akKa0XYDEWA0MGPhCI5fAd3M",
        authDomain: "la-hacks2021.firebaseapp.com",
        projectId: "la-hacks2021",
        storageBucket: "la-hacks2021.appspot.com",
        messagingSenderId: "294988207775",
        appId: "1:294988207775:web:90a68939257b13cc4db4aa",
        measurementId: "G-M68EDCC264"
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};

/******
Retrieve array of documents from Firestore
If criteria and fields in query are different, an index must be made in Firestore. The error will provide a link to create an index.
collection:string - Name of collection in Firestore
criteria:string - Property of document to be ordered by
direction:string - Direction of document order. Can be 'asc' or 'desc'
limit:number - Number of documents needed from beginning of array
query:array<object> - Array of query restrictions. Restrictions are objects in the format { field: nField, op: nOp, value: nValue }
return - Array of document objects
******/
export async function getData(collection, criteria, direction, limit, query) {
    let data = [];
    let db = firebase.firestore();

    let dbData = db.collection(collection);
    query?.forEach(filter => {
        dbData = dbData.where(filter.field, filter.op, filter.value);
    });
    dbData = criteria ? dbData.orderBy(criteria, direction || 'asc') : dbData;
    dbData = limit ? dbData.limit(limit) : dbData;

    let querySnapshot = await dbData.get();
    querySnapshot.forEach(doc => {
        data.push(doc.data())
    });

    return data;
}
