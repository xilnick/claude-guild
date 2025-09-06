# Guild Setup - Optional Pre-Configuration

## Purpose

OPTIONAL: Pre-analyze a project to understand its structure. Not required - Claude can analyze on-demand during task execution.

## When to Use Setup

<when_to_use>
  - For frequently used projects where you want cached analysis
  - When you want to understand a project before diving in
  - NEVER required - workflow can analyze on-the-fly
</when_to_use>

## What Setup Does

<setup_process>
  <analyze>
    Look at the project structure, technology, patterns
  </analyze>
  
  <understand>
    Identify natural boundaries and components
  </understand>
  
  <cache>
    Store understanding for faster task execution
  </cache>
</setup_process>

## Simple Setup Flow

<flow>
  1. Analyze project files and structure
  2. Identify key technologies and patterns
  3. Note natural component boundaries
  4. Cache for future use (optional)
</flow>

## That's It

Setup should be simple project analysis, not complex agent creation. The workflow command handles actual task execution dynamically.