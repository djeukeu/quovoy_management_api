import convict from 'convict';
import * as dotenv from 'dotenv';
dotenv.config();

const conf = convict({
    config: {
        port: { format: 'port', default: 4000, env: 'PORT' },
        env: {
            format: ['production', 'development', 'staging'],
            default: 'development',
            env: 'APP_ENV',
        },
        app_name: {
            format: 'String',
            default: 'quovoy-management-api',
            env: 'APP_NAME',
        },
    },
});
conf.validate({ allowed: 'strict' });
export default conf.get('config');
