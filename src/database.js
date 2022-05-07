import { connect } from 'mongoose'


(async () => {
  try {
    const db = await connect("mongodb://localhost:27017/notes_atlas");
    console.log('DB is connected to', db.connection.name)
  } catch (e) {
    console.log(e);
  }
})();


