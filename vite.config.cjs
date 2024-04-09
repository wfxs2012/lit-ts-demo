import {defineConfig} from 'vite';
import viteCompression from 'vite-plugin-compression';

const path = require('path')


const getUrl = (name) => {
    return path.resolve(__dirname, `./node_modules/@banana-ui/banana/dist/${name}/index.js`)
}

export default defineConfig({
    build: {

        rollupOptions: {
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,

                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }

                }

            }

        }
    }
    ,

    resolve: {
        alias: {
            'b-button': getUrl('button'),
            'b-dropdown': getUrl('dropdown'),
            'b-menu': getUrl('menu'),
            'b-menu-item': getUrl('menu-item'),
            'b-divider': getUrl('divider'),
            'b-stepper': getUrl('stepper'),
            'b-input': getUrl('input'),
        }
    }
    ,
    plugins: [viteCompression()],

});
