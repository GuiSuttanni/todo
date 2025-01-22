const db = require('../utils/firestore');
const os = require('os');

const insertTasks = async (tasks) => {
  const computerName = os.hostname();
  const batch = db.batch();

  tasks.forEach((task) => {
    const docRef = db.collection('tasks').doc();
    batch.set(docRef, { ...task, computer: computerName });
  });

  await batch.commit();
};

const getTasks = async () => {
  const snapshot = await db.collection('tasks').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

module.exports = { insertTasks, getTasks };