import * as zod from "zod";

export type ModData = {
  name: string;
  mod_reference: string;
  short_description: string;
  full_description?: string;
  logo?: string;
  source_url?: string;
}

export const modSchema = zod.object({
  name: zod.string().min(3).max(32),
  mod_reference: zod.string().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async () => {
    // TODO Check if mod reference exists
    return true;
  }),
  short_description: zod.string().min(16).max(128),
  full_description: zod.optional(zod.string()),
  logo: zod.optional(zod.any().refine(logo => 'name' in logo && 'size' in logo && 'type' in logo)),
  source_url: zod.string().url().optional().or(zod.literal('')),
});
