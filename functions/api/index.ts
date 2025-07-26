// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { AIProcessingEngineHandler } from './AIProcessingEngine';
import { TemplateLibraryHandler } from './TemplateLibrary';
import { ResumeGeneratorHandler } from './ResumeGenerator';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/AIProcessingEngine") return AIProcessingEngineHandler(request);
  if (path === "/api/TemplateLibrary") return TemplateLibraryHandler(request);
  if (path === "/api/ResumeGenerator") return ResumeGeneratorHandler(request);

  return new Response("Not found", { status: 404 });
}
