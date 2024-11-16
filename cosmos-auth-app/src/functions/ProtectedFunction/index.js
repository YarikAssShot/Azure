module.exports = async function (context, req) {
    context.log("ProtectedFunction triggered!");

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        context.res = {
            status: 401,
            body: "Unauthorized",
        };
        return;
    }

    // Здесь можно добавить проверку токена JWT

    context.res = {
        status: 200,
        body: "Access granted to protected route!",
    };
};
