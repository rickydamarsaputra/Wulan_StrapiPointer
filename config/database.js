module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb://admin:admin@pointercluster-shard-00-00.fzg9o.mongodb.net:27017,pointercluster-shard-00-01.fzg9o.mongodb.net:27017,pointercluster-shard-00-02.fzg9o.mongodb.net:27017/pointer-strapi?ssl=true&replicaSet=atlas-7ktjbs-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
