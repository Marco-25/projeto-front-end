import Document, { Head, Html, Main, NextScript } from 'next/document';
import Menu from '../components/Menu';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <header>
                    </header>

                    <Main />
                    <NextScript></NextScript>

                </body>
            </Html>
        )
    }
}