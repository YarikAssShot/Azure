module.exports = async function (context, req) {
    context.log('RegisterFunction processed a request.');

    const name = req.body.name || 'Unknown';
    context.res = {
        body: `Hello, ${name}`
    };
};
