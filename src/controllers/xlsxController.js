const XLSX = require('xlsx');
const db = require('../config/dbConnection');
const fs = require('fs');

function getId(links) {
    let id = 0;
    if (links) {
        links = links.split(' ');
        let pos;
        for (const link of links) {
            pos = link.search("https://vtch.cc/crm/deal/details/");
            if (pos != -1) {
                id = parseInt(link.slice(33, link.length - 1));
                break;
            }
        }
    } return id;
}

const ExceltoJSON = async (req, res) => {
    try {
        if (!req.file == undefined) {
            return res.status(400).send("Please upload an excel file!");
        }

        var workbook = XLSX.readFile(req.file.path, {cellDates:true});
        let worksheets = {};
        for (const sheetName of workbook.SheetNames) {
            worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        }

        for (const sheetName of workbook.SheetNames) {
            for (const contact of worksheets[sheetName]) {
                let id = contact["#"];
                let open_channel = contact["Canal Abierto"];
                let status = contact.Estado;
                let channel = contact.Canal;
                let client = contact.client;
                let crm_link = contact["Enlace del CRM"];
                let negotiation_id = getId(crm_link);
                let messages = contact.Mensajes;
                let employee = contact.Empleado;
                let created = contact["Creado el"];
                let requested = contact["Solicitud enviada al agente el"];
                let attended = contact["El agente respondió el"];
                let last_message = contact["Último mensaje publicado el"];
                let agent_closed = contact["El agente cerró la conversación el"];
                let waiting_answer = contact["Esperando a que el agente responda"];
                let response_time = contact["Tiempo de respuesta del agente (sin la actividad del bot de chat)"];
                let duration_close = contact["Duración antes del cierre del agente"];
                let convo_duration = contact["Duración de la conversación"];
                let init_response_time = contact["Tiempo de respuesta inicial"];
                let total_response_time = contact["Tiempo de respuesta total"];
                let avg_response_time = contact["Tiempo de respuesta promedio"];
                let max_response_time = contact["Tiempo de respuesta máximo"];

                db.query('INSERT INTO contacts SET?', {
                    id,
                    open_channel,
                    status,
                    channel,
                    client,
                    crm_link,
                    negotiation_id,
                    messages,
                    employee,
                    created,
                    requested,
                    attended,
                    last_message,
                    agent_closed,
                    waiting_answer,
                    response_time,
                    duration_close,
                    convo_duration,
                    init_response_time,
                    total_response_time,
                    avg_response_time,
                    max_response_time
                }, (err) => {
                    if (err) throw err;
                });
            }
        }
        fs.unlink(req.file.path, (err) => {
            if (err) {
                throw err;
            }
        });
    } catch (err) {
        console.log(error);
        res.status(500).send({
            message: "Could not upload the file: " + req.file.originalname,
        });
    }
    res.send("Database updated.");
    console.log("Data saved successfully.");
    return;
}

module.exports = { ExceltoJSON };