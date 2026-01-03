---  
description: Multi-agent memory bank extension with shared context, individual entity entries, and collaborative workflow management  
author: Devin + AcidGreenServers  
version: 1.0.0  
tags: multi-agent, memory-bank, collaboration, context-management  
globs: ["memory-bank/**", ".clinerules/**"]  
---  
  
## Brief overview  
This rule establishes a multi-agent memory bank system that extends the standard Memory Bank hierarchy to support collaborative work between multiple AI agents and humans. It provides structured protocols for shared context management, individual attribution, and collaborative idea development.  
  
## Agent identity and attribution  
- **Always state your name/identity** when making entries in shared memory bank files  
- Use consistent format: `[Agent Name] - [Timestamp] - [Entry Type]`  
- Maintain clear attribution for all contributions to enable tracking of who did what  
- Each agent/human should have a unique identifier that persists across sessions  
  
## Shared context management  
- **Primary shared file**: `memory-bank/shared-context.md` for collaborative entries  
- **Respectful collaboration**: Build upon others' ideas rather than replacing them  
- **ASCII diagrams**: Use visual/spatial diagrams for complex implementations and system designs  
- **Entry format**: Start each entry with clear attribution and timestamp
- **Project Shared Context**: Shared Project context documents are stored with shared-context.md add relevant project conext worked on and completed.  
  
## Context archival protocol  
- **Auto-archive**: Move content after 500 lines to `archived-context-[YYYY-MM-DD].md`  
- **Archive location**: Store in `memory-bank/archived-context/` directory  
- **Preserve attribution**: Maintain original authorship when archiving  
- **Reference system**: Leave pointers in active file to archived content  
  
## Collaborative idea development  
- **Build upon ideas**: Extend and improve others' contributions with clear attribution  
- **Proposal system**: Create individual proposal files as `[name]-idea-proposal-[date].md`  
- **Address contributors**: Tag specific individuals when building on their ideas  
- **Perspective value**: Every contribution adds value regardless of final implementation  
  
## Agent registry system  
- **Registry file**: Maintain `memory-bank/agent-registry.md` with all participant details  
- **Role tracking**: Document specialization areas (frontend, backend, testing, etc.)  
- **Active tasks**: Track current responsibilities per agent  
- **Collaboration history**: Maintain matrix of past interactions and outcomes  
  
## ASCII diagram standards  
- Use consistent characters: `│├─└` for trees, `→←` for flows, `□■` for states  
- Label all components clearly with descriptive names  
- Include legends for complex diagrams  
- Show agent responsibilities with visual indicators  
  
## Conflict resolution  
- **Detect overlaps**: Identify conflicting entries between agents  
- **Suggest resolutions**: Provide strategies for merging competing ideas  
- **Maintain attribution**: Preserve original contributor credits  
- **Version tracking**: Use clear versioning for evolving concepts  
  
## Private context spaces  
- **Agent directories**: Create `memory-bank/agents/[name]/` for personal notes
- **Individual Active Contexts**: Each agent gents theyre own active context file for individuality.  
- **Shared visibility**: Keep shared context visible to all participants  
- **Selective sharing**: Choose when to promote private notes to shared context  
- **Access control**: Respect privacy boundaries between agents  
  
## Implementation workflow  
1. Initialize agent registry with all participants  
2. Create shared-context.md with collaboration guidelines  
3. Set up archival system for context management  
4. Establish individual agent directories  
5. Define proposal and idea development protocols