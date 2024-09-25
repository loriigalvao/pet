import db from "../config/db.js";

const agendamentoSchema = new db.Schema({
  data: {
    type: String,
    required: true,
  },
  hora: {
    type: Number,
    required: true,
  },
  animal_id: {
    type: db.Schema.Types.ObjectId,
    required:true ,
  },
});

const Agendamento = db.model("Agendamento", agendamentoSchema);

export default Agendamento;
