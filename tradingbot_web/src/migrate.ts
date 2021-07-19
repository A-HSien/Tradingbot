import {TradingbotWebApplication} from './application';
import { logger } from './common/Logger';

export async function migrate(args: string[]) {
  const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
  logger.debug('Migrating schemas (%s existing schema)', existingSchema);

  const app = new TradingbotWebApplication();
  await app.boot();
  await app.migrateSchema({existingSchema});

  // Connectors usually keep a pool of opened connections,
  // this keeps the process running even after all work is done.
  // We need to exit explicitly.
  process.exit(0);
}

migrate(process.argv).catch(err => {
  logger.error('Cannot migrate database schema', err);
  process.exit(1);
});
