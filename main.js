const { createApp } = Vue;

createApp({
  data() {
    return {
      contador: 0,
      menuAberto: false,
      form: { nome: '', turma: '' },
      inscritos: []
    };
  },
  methods: {
    adicionarInscrito() {
      if (!this.form.nome || !this.form.turma) return;
      this.inscritos.push({ nome: this.form.nome, turma: this.form.turma });
      this.form.nome = '';
      this.form.turma = '';
    },
    removerInscrito(idx) {
      this.inscritos.splice(idx, 1);
    }
  }
}).mount('#app');