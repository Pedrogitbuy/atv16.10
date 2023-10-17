#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int id, ano, mes, dia;
    char nome[100];
} Pessoa;

int main() {
    FILE *entrada;
    char linha[1000];

    entrada = fopen("entrada.csv", "r");
    if (entrada == NULL) {
        printf("Erro ao abrir o arquivo");
        return 1;
    }

    while (fgets(linha, sizeof(linha), entrada) != NULL) {
        Pessoa pessoa;
        if (sscanf(linha, "%d;%99[^;];%d-%d-%d", &pessoa.id, pessoa.nome, &pessoa.ano, &pessoa.mes, &pessoa.dia) == 5) {
            printf("%d %s %d %d %d\n", pessoa.id, pessoa.nome, pessoa.ano, pessoa.mes, pessoa.dia);
        }
    }

    fclose(entrada);
    return 0;
}

