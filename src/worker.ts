import { type CriarWorkerOptions, criarWorker } from "@confinancas/core-money/worker";
import marca from "../marca.json";
import pkg from "../package.json";

// O JSON chega com os tipos alargados (id e wordmark como string): o formato é o do BrandConfig do núcleo.
const marcaDoApp = marca as CriarWorkerOptions["marca"];

export default criarWorker({ marca: marcaDoApp, versao: pkg.version });
