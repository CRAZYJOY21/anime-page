const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Anime = sequelize.define('anime', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.INTEGER, unique: true },
    raiting: { type: DataTypes.INTEGER, defaultValue: 0 },
    image: { type: DataTypes.INTEGER, allowNull: false }
})

const AnimeInfo = sequelize.define('anime_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.INTEGER },
    genre: { type: DataTypes.INTEGER },
    studio: { type: DataTypes.INTEGER, unique: true },
    date: { type: DataTypes.DATE, allowNull: false },
})

const AnimeFavorite = sequelize.define('anime_favorite', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    like: { type: DataTypes.INTEGER, defaultValue: 0 }
})

const AnimeType = sequelize.define('anime_type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.INTEGER, allowNull: false }
})

const AnimeGenre = sequelize.define('anime_genre', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    genre: { type: DataTypes.INTEGER, allowNull: false }
})

const AnimeRaiting = sequelize.define('anime_raiting', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false }
})

const Comment = sequelize.define('comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.DATE },
    text: { type: DataTypes.INTEGER },
})


User.hasOne(Anime)
Anime.belongsTo(User)

User.hasMany(AnimeRaiting)
AnimeRaiting.belongsTo(User)

User.hasOne(Comment)
Comment.belongsTo(User)

User.hasOne(AnimeFavorite)
AnimeFavorite.belongsTo(User)

Anime.hasMany(AnimeInfo)
AnimeInfo.belongsTo(Anime)

Anime.hasOne(AnimeType)
AnimeType.belongsTo(Anime)

Anime.hasMany(AnimeGenre)
AnimeGenre.belongsTo(Anime)

Anime.hasMany(AnimeRaiting)
AnimeRaiting.belongsTo(Anime)

Anime.hasMany(Comment)
Comment.belongsTo(Anime)

Anime.hasMany(AnimeFavorite)
AnimeFavorite.belongsTo(Anime)


module.exports = {
    User,
    Anime,
    AnimeInfo,
    AnimeFavorite,
    AnimeType,
    AnimeGenre,
    AnimeRaiting,
    Comment
}






