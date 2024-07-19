import express from 'express';
import cors from 'cors';

const app = express();
app.use( cors() );
const PORT = 4000


app.get( '/first', ( req, res ) => {
    res.status( 200 ).json( { message: "wellcome back to codding world" } )
} )




app.listen( PORT, () => {
    console.log( "APP is listening in the port:", PORT );
} )