module.exports = ( sequelize, DataTypes ) => {
    const Files = sequelize.define("Files", {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Files;
};