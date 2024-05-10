const { Client, EmbedBuilder, GatewayIntentBits, Permissions } = require("discord.js");
const bot = new Client({ intents: ["Guilds"] });
const channelId = "1072941154754101278";
DataBase.connectDatabase(bot);
const loadDatabase = require("./handlers/loadDatabase.js");
console.log("Connexion au bot...");
bot.login("token du bot")
    .then(() => console.log("Connecté au bot !"))
    .catch((error) => console.log("Impossible de se connecter au bot - " + error));
    bot.on("ready", async () => {
        const channel = await bot.channels.fetch(channelId);
        const startTime = Date.now();
        channel.send("Démarrage du bot, ping en cours...").then(async () => {
            const endTime = Date.now();
            const ping = endTime - startTime;
            console.log(`Connecté en tant que ${bot.user.tag}! Ping : ${ping}ms`);
            channel.send(`Bot demarré en ${ping}ms !`);
            await bot.application.commands.set([
        {
            name: "uwu",
            description: "kawai"
        },
        {
            name: "say",
            description: "Répète le texte saisi par l'utilisateur",
            options: [
                {
                    name: "texte",
                    description: "Le texte à répéter",
                    type: 3,
                    required: true
                }
            ]
        },
        {
            name: "ping",
            description: "pong!"
        },
        {
            name: "elise",
            description: "my bad"
        },
        {
            name: "whoami",
            description: "qui es tu ?"
        },
        {
            name: "eva",
            description: "baha logique"
        },
        {
            name: "restart",
            description: "redemarrer le bot"
        },
        {
            name: "mention",
            description: "Mentionne un utilisateur",
            options: [
                {
                    name: "utilisateur",
                    description: "L'utilisateur à mentionner",
                    type: 6,
                    required: true
                }
            ]
        },
        {
            name: "ban",
            description: "Bannit un utilisateur",
            options: [
                {
                    name: "utilisateur",
                    description: "L'utilisateur à bannir",
                    type: 6,
                    required: true
                },
                {
                    name: "raison",
                    description: "La raison du bannissement",
                    type: 3,
                    required: false
                }
            ]
        },
        {
            name: "shutdown",
            description: "Éteint le bot",
        },        
        {
            name: "kick",
            description: "Exclut un utilisateur",
            options: [
                {
                    name: "utilisateur",
                    description: "L'utilisateur à exclure",
                    type: 6,
                    required: true
                },
                {
                    name: "raison",
                    description: "La raison de l'exclusion",
                    type: 3,
                    required: false
                }
            ]
        },
        {
            name: "help",
            description: "Affiche toutes les commandes disponibles"
        }
    ]);
});
});
    console.log("Le bot est prêt !"),
bot.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping") {
        const startTime = Date.now(); 
        interaction.reply({ content: "Pinging..." }).then(sent => {
            const endTime = Date.now();
            const ping = endTime - startTime
            sent.edit(`Ma latence est de : ${ping}ms.`);
            console.log(`Ping : ${ping}ms`);
        });
    }

    if (interaction.commandName === "uwu") {
        interaction.reply("UUUwwwUUU!");
    }

    if (interaction.commandName === "elise") {
        const userId = "788802829539606549";
        const user = await interaction.guild.members.fetch(userId);
        if (user) {
            interaction.reply(`${user.toString()} La meilleure des princesses !!!`);
            const channel = await bot.channels.fetch(channelId);
            if (user) {
            }
        } else {
            interaction.reply("Je ne peux pas trouver cet utilisateur.");
        }
    }

    if (interaction.commandName === "whoami") {
        interaction.reply(`Tu es ${interaction.user.toString()} :)`);
    }

    if (interaction.commandName === "mention") {
        const userToMention = interaction.options.get("utilisateur").user;
        const reason = interaction.options.getString("raison") || "Aucune raison spécifiée";
        interaction.reply(`${userToMention.toString()} manges toi la mention de ${interaction.user.toString()}`);
    }

    if (interaction.commandName === "ban") {
        const userToBan = interaction.options.get("utilisateur").user;
        const reason = interaction.options.getString("raison") || "Aucune raison spécifiée";
        interaction.reply(`L'utilisateur ${userToBan.toString()} n'a pas été banni pour la raison suivante : ${reason}`);
    }
    
    if (interaction.commandName === "kick") {
        const userToKick = interaction.options.get("utilisateur").user;
        const reason = interaction.options.getString("raison") || "Aucune raison spécifiée";
        interaction.reply(`L'utilisateur ${userToKick.toString()} n'a pas été exclu pour la raison suivante : ${reason}`);
    }
    if (interaction.commandName === 'shutdown') {
        const allowedUserIds = ['607516069036556289', '969287987672268840'];
        if (!allowedUserIds.includes(interaction.user.id)) {
            return interaction.reply('Vous n\'avez pas la permission d\'éteindre le bot.');
        }
        await interaction.reply('Arrêt du bot...');
        console.log('Arrêt du bot demandé par', interaction.user.tag);
        process.exit();
    }
const axios = require('axios');

if (interaction.commandName === 'restart') {
    const allowedUserIds = ['607516069036556289', '969287987672268840'];
    if (!allowedUserIds.includes(interaction.user.id)) {
        return interaction.reply('Vous n\'avez pas la permission de redémarrer le bot.');
    }
    await interaction.reply('Redémarrage du serveur en cours...');
    console.log('Redémarrage du serveur demandé par', interaction.user.tag,'en cours');
    // Remplacez ces valeurs par les informations de votre serveur Pterodactyl
    const serverId = ''; // Identifiant de votre serveur
    const pterodactylApiKey = '';
    try {
        // Envoyer une demande de redémarrage à l'API Pterodactyl
        await axios.post(`https://panel.adkynet.com/api/client/servers/${serverId}/power`, {
            signal: 'restart',
        }, {
            headers: {
                'Authorization': `Bearer ${pterodactylApiKey}`,
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Erreur lors du redémarrage du serveur :', error);
        interaction.followUp('Une erreur est survenue lors du redémarrage du serveur.');
    }
}
    if (interaction.commandName === "say") {
        const text = interaction.options.getString("texte");
        interaction.reply(text);
    }
    if (interaction.commandName === "help") {
        const commands = bot.application.commands.cache.map(cmd => `/${cmd.name} - ${cmd.description}`).join("\n");
        const embed = new EmbedBuilder()
            .setTitle("Liste des commandes disponibles")
            .setDescription(commands)
            .setColor("#0099ff");
        interaction.reply({ embeds: [embed] });
    }

    if (interaction.commandName === "eva") {
        const userId = "1017065362270982164";
        const user = await interaction.guild.members.fetch(userId);
        if (user) {
            interaction.reply(`${user.toString()} la princesse !!!`);
        } else {
            interaction.reply("Je ne peux pas trouver cet utilisateur.");
        }
    }
});
bot.on("ready", async () => {
    const channel = await bot.channels.fetch(channelId);
    // Envoyer le même message pendant 10 secondes
    const message = "<@1021674756350677052> uwu mdr";
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            channel.send(message);
        }, i * 1000); // Envoyer chaque message avec un délai d'une seconde
    }
});
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Fonction pour traiter les commandes saisies depuis la console
rl.on('line', (input) => {
    // Exemple : Si l'utilisateur entre "say Bonjour", le bot envoie "Bonjour" dans un canal spécifique
    if (input.startsWith('say ')) {
        const texte = input.slice(4); // Récupère le texte après "say "
        direAuBot(texte);
    } else {
        console.log('Commande non reconnue.');
    }
});

// Fonction pour faire dire quelque chose au bot
async function direAuBot(texte) {
    const channelId = '1166099439115579413'; // Remplacez par l'ID du canal où vous voulez que le bot dise quelque chose
    const channel = await bot.channels.fetch(channelId);
    if (channel) {
        channel.send(texte);
        console.log('Le bot a dit:', texte);
    } else {
        console.log('Erreur: Impossible de trouver le canal avec l\'ID', channelId);
    }
}
