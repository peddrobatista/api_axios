import axios from "axios";

// URL do seu servidor
const baseUrl = 'http://localhost:3001';
const demo = document.getElementById('#demo');
const testMetadata = async () => {
    try {
        const response = await axios.get(`${baseUrl}/metadata`);
        console.log('Metadata:', response.data);
    } catch (error) {
        console.error('Erro ao obter metadados:', error);
    }
};

const testGetRows = async () => {
    try {
        const response = await axios.get(`${baseUrl}/rows`);
        console.log('Rows:', response.data);
        demo.innerHTML.values(response.data);

    } catch (error) {
        console.error('Erro ao obter linhas:', error);
    }
};

const testAddRow = async () => {
    try {
        const response = await axios.post(`${baseUrl}/addRow`, {
            values: ['Valor1', 'Valor2']
        });
        console.log('Add Row:', response.data);
    } catch (error) {
        console.error('Erro ao adicionar linha:', error);
    }
};

const testUpdateValue = async () => {
    try {
        const response = await axios.put(`${baseUrl}/updataValue`, {
            rowIndex: 2,
            startColumn: 'A',
            endColumn: 'B',
            values: ['Novo Valor1', 'Novo Valor2']
        });
        console.log('Update Value:', response.data);
    } catch (error) {
        console.error('Erro ao atualizar valor:', error);
    }
};

const testDeleteValue = async () => {
    try {
        const response = await axios.delete(`${baseUrl}/deleteValue`, {
            data: { range: 'Página1!A6:B6' }
        });
        console.log('Delete Value:', response.data);
    } catch (error) {
        console.error('Erro ao deletar valor:', error);
    }
};

// Executando os testes
const runTests = async () => {
    await testMetadata();
    await testGetRows();
    await testAddRow();
    await testUpdateValue();
    await testDeleteValue();
};

runTests();

// execute npm start