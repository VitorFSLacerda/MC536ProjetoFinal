package io.unicamp.fiscais.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.sql.Date;
import java.util.UUID;

@Builder
@AllArgsConstructor
@Getter
@Data
public class Obra {
    @NotNull
    private final String id;

    @NotNull
    private final String id_localizacao;

    @NotNull
    private final Date data_inicio;

    @NotNull
    private final Date data_previsao;

    private final Date data_conclusao;

    @NotNull
    private final float orcamento;

    @NotNull
    private final String nome;

    private final String descricao;

    @NotNull
    private final String tipo;

    @NotNull
    private final String status;
}
