# Azure Kubernetes Service Deployment using GitHub Actions

A comprehensive DevOps project demonstrating CI/CD pipeline implementation for deploying a Next.js application to Azure Kubernetes Service (AKS) using GitHub Actions.

[![celebal-deployment-pipeline](https://github.com/akash2061/Celebal-DevOps-Project/actions/workflows/celebal-deployment-pipeline.yml/badge.svg)](https://github.com/akash2061/Celebal-DevOps-Project/actions/workflows/celebal-deployment-pipeline.yml)
[![Docker Image CI](https://github.com/akash2061/Celebal-DevOps-Project/actions/workflows/docker-image-CI.yml/badge.svg)](https://github.com/akash2061/Celebal-DevOps-Project/actions/workflows/docker-image-CI.yml)
[![Push Docker-Hub image to ACR](https://github.com/akash2061/Celebal-DevOps-Project/actions/workflows/azure-container-reg-CI.yml/badge.svg)](https://github.com/akash2061/Celebal-DevOps-Project/actions/workflows/azure-container-reg-CI.yml)

## 🏗️ Project Architecture

![GitHub Actions CI/CD Pipeline](Docs/azure_devops_cicd.png)
![GitHub Actions CI/CD Pipeline](Docs/High-Level-Architecture.png)

## 📋 Project Overview

This project showcases a complete DevOps workflow that includes:

- **Frontend Application**: Next.js application with TypeScript and Tailwind CSS
- **Containerization**: Docker containerization for consistent deployments
- **CI/CD Pipeline**: GitHub Actions pipeline for automated build and deployment
- **Container Registry**: Azure Container Registry for image storage
- **Orchestration**: Azure Kubernetes Service for container orchestration

## 🛠️ Technology Stack

### Application
- **Next.js 15.2.4** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **Lucide React** - Icon library

### DevOps & Infrastructure
- **GitHub Actions** - CI/CD pipeline management
- **Azure Container Registry** - Container image registry
- **Azure Kubernetes Service** - Container orchestration
- **Docker** - Containerization platform

## 📸 Deployment Snapshots

The following screenshots showcase real-time deployments from our CI/CD workflow:

### ✅ AKS Deployment Success
![AKS Deployment Success](Docs/auto_k8s/auto_k8s_result-1.png)
### ✅ Autoscale Enabled K8s
![Autoscale Enabled K8s](Docs/auto_k8s/auto_k8s_pods.png)
### ✅ Single Image on K8s
![Single Image on K8s](Docs/single_image/single-image_k8s_deployment.png)
### ✅ Azure Container Registry
![Container Registry](Docs/ACR_n_NodePool/Container_regestory.png)
### ✅ Node Pool Creation
![Node Pool Creation](Docs/ACR_n_NodePool/created_nodepool.png)

> Detailed ScreenShorts are available in : [Documentation](Docs/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- Docker
- GitHub account
- Azure subscription
- kubectl (for local Kubernetes management)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/akash2061/Celebal-DevOps-Project
   cd Celebal-DevOps-Project
   ```

2. **Navigate to the App directory**
   ```bash
   cd App
   ```

3. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps 
   # or
   pnpm install --legacy-peer-deps 
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:80](http://localhost:80)

### Docker Deployment

1. **Build the Docker image**
   ```bash
   cd App
   docker build -t my-v0-project .
   ```

2. **Run the container**
   ```bash
   docker run -p my-v0-project
   ```

## 🔄 CI/CD Pipeline

The project implements a complete CI/CD pipeline as illustrated in the diagram above:

### Pipeline Stages

1. **Source Control**: Developer commits code to GitHub repository
2. **Feature Branch**: Development work happens in feature branches
3. **Pull Request**: Code review and merge to main branch
4. **Build Pipeline**: 
   - Code compilation and testing
   - Docker image creation
   - Push to Azure Container Registry
   - Generate deployment artifacts
5. **Release Pipeline**: Deploy to Azure Kubernetes Service

### Pipeline Configuration

The pipeline is configured to:
- Build the Next.js application
- Create Docker images
- Push images to Azure Container Registry
- Deploy to AKS cluster
- Run on port 80

## 🐳 Docker Configuration

The [Dockerfile](App/Dockerfile) uses multi-stage builds for optimization:

- **Base stage**: Install dependencies and build the application
- **Production stage**: Create lightweight production image

Key features:
- Uses Node.js 18 Alpine for smaller image size
- Optimized for production deployment
- Exposes port 80
- Includes only necessary files for runtime

## 🚀 Deployment

### Azure Kubernetes Service Deployment

1. **Set up Azure resources**
   - Create AKS cluster
   - Set up Azure Container Registry
   - Configure GitHub secrets for authentication

2. **Configure GitHub secrets**
   - Container registry URL
   - Kubernetes namespace
   - Azure service principal credentials

3. **Deploy using GitHub Actions**
   - Pipeline automatically triggers on code commits
   - Builds and pushes container images
   - Deploys to AKS cluster

> K8s Deployment Manifest using ACR : [ACR-K8s](App/manifests/aks_deployment.yml)

> K8s Deployment Manifest using Docker-Hub : [Docker-Hub-K8s](App/manifests/docker_hub_k8s_deployment.yml)

### AKS Pipeline Deployment:
![GitHub-Workflow](Docs/auto_k8s/auto_k8s_github_action.png)

## 🔁 Workflows 

1. **Celebal Deployment Pipeline** : Complete CI/CD pipeline that builds images and deploys to Azure Kubernetes Service _(automated deployments)_

2. **Docker Image CI** : Builds and pushes Docker images to Docker Hub [@u/akash2061](https://hub.docker.com/u/akash2061) _(manual trigger | Fallback Option)_

3. **Azure Container Registry CI** : Migrates Docker images from Docker Hub to Azure Container Registry _(manual trigger)_

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
5. Ensure all GitHub Actions checks pass

## 📝 Documentation

Additional documentation can be found in the [Docs](Docs/) directory:
- Pipeline architecture diagrams
- Detailed project presentation
- Infrastructure setup guides

## 🔧 Scripts

Available npm scripts in [package.json](App/package.json):

```json
{
  "dev": "next dev -p 80",      // Development server
  "build": "next build",           // Production build
  "start": "next start -p 80",   // Production server
  "lint": "next lint"              // Code linting
}
```

## 📄 License

This project is part of a DevOps learning initiative and is intended for educational purposes.

---

**Note**: This project demonstrates enterprise-grade DevOps practices including automated testing, security scanning, and production deployment strategies using GitHub Actions and Azure cloud services.