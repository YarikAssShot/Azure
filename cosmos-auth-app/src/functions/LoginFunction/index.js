module.exports = async function (context, req) {
    context.log('LoginFunction triggered.');
    context.res = {
        status: 200,
        body: "Login function executed successfully."
    };
};
