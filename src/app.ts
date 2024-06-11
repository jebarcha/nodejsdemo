import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo';
import { Server } from './presentation/server';

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // Create a new record (Collection - table and document-record)
  // const newLog = await LogModel.create({
  //   message: 'Test message from Mongo',
  //   origin: 'App.ts',
  //   level: 'low',
  // });
  // //await newLog.save();
  // //console.log(newLog);
  // const logs = await LogModel.find();
  // console.log(logs[1]);
  //console.log(logs);

  Server.start();
}
