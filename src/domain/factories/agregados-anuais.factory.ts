import { Result } from 'typescript-monads';
import { Faturamento, Investimento } from '@domain/valores-anuais';
import { Faturante, PerfilInvestimento } from '@domain/agregados-anuais';
import { QuadroDeColaboradores } from '@domain/valores-anuais/quadro-de-colaboradores';
import { HistoricoQuadroDeColaboradores } from '@domain/agregados-anuais/historico-quadro-de-colaboradores';

export class AgregadosAnuaisFactory {
  static validateFaturante(
    faturamentos: Faturamento[],
  ): Result<Faturante, string> {
    const faturamentosResult = Faturante.validateValores(faturamentos);
    if (faturamentosResult.isFail())
      return Result.fail(faturamentosResult.unwrapFail());
    return Result.ok(undefined);
  }

  static faturante(faturamentos: Faturamento[]): Result<Faturante, string> {
    const faturamentosResult = Faturante.validateValores(faturamentos);
    if (faturamentosResult.isFail())
      return Result.fail(faturamentosResult.unwrapFail());
    return Result.ok(new Faturante(faturamentos));
  }

  static validatePerfilInvestimento(
    investimentos: Investimento[],
  ): Result<PerfilInvestimento, string[]> {
    const investimentosResult =
      PerfilInvestimento.validateValores(investimentos);
    if (investimentosResult.isFail())
      return Result.fail([investimentosResult.unwrapFail()]);
    return Result.ok(undefined);
  }

  static perfilInvestimento(
    investimentos: Investimento[],
  ): Result<PerfilInvestimento, string[]> {
    const investimentosResult =
      PerfilInvestimento.validateValores(investimentos);
    if (investimentosResult.isFail())
      return Result.fail([investimentosResult.unwrapFail()]);
    return Result.ok(new PerfilInvestimento(investimentos));
  }

  static historicoQuadroDeColaboradores(
    quadros: QuadroDeColaboradores[],
  ): Result<HistoricoQuadroDeColaboradores, string[]> {
    const result = HistoricoQuadroDeColaboradores.validateValores(quadros);
    if (result.isFail()) return Result.fail([result.unwrapFail()]);
    return Result.ok(new HistoricoQuadroDeColaboradores(quadros));
  }
}
