/**
 * Type definitions for the application
 */

export interface User {
  id: string;
  clerkId: string;
  email: string;
  name?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Workspace {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Note {
  id: string;
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  tags: string[];
  isPinned: boolean;
  isArchived: boolean;
  viewCount: number;
  userId: string;
  workspaceId: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UploadedFile {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  fileType: string;
  extractedText?: string;
  userId: string;
  noteId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIHistory {
  id: string;
  type: string;
  prompt: string;
  response: string;
  model: string;
  tokens: number;
  duration: number;
  status: string;
  error?: string;
  userId: string;
  noteId?: string;
  createdAt: Date;
}

export interface ActivityLog {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  changes?: string;
  userId: string;
  noteId?: string;
  createdAt: Date;
}