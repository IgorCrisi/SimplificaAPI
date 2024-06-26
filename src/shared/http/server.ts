import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';
import { dataSource } from '../typeorm';

dataSource.initialize().then(() => {
  try {
    const server = app.listen(3333, () => {
      console.log('Server started on port 3333! 🚀')
    });  
  } catch (error) {
    console.log(error);
  }
});

