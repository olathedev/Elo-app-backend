import { createServer } from 'http';
import app from './app';
import dotenv from 'dotenv';
import connectDatabase from './config/connect';
dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDatabase();

    const httpServer = createServer(app);

    const server = httpServer.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    process.on('unhandledRejection', (err) => {
      console.log('UNHANDLED REJECTION! Shutting down...');
      console.error(err);
      server.close(() => {
        process.exit(1);
      });
    });
  } catch (error) {
    console.log('Error starting server:', error);
    process.exit(1);
  }
};

startServer();
