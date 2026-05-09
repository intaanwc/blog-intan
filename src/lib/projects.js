const modules = import.meta.glob('../content/projects/*.mdx', { eager: true })

export const projects = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => ({
    slug: path.split('/').pop().replace('.mdx', ''),
    frontmatter: mod.frontmatter ?? {},
    Content: mod.default,
  }))

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}
