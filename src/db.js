const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@codelab-cluster.cbas1.mongodb.net/testdb?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .catch(err => console.log(err))


const MateriaSchema = new mongoose.Schema({
  codigo: {
    // Check implicito por matéria repetida
    unique: true,
    type: String
  },
  nome_pt_br: String,
  nome_en_us: String,
  creditos_aula: Number,
  creditos_trabalho: Number,
  carga_horaria_total: Number,
  tipo: String,
  objetivos_pt_br: String,
  objetivos_en_us: String,
  requisitos: Array,
});

const Materia = mongoose.model('Materia', MateriaSchema);

module.exports = Materia;

