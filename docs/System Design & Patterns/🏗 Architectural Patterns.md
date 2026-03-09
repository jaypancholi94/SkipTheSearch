# 🏗 Architectural Patterns

Architectural patterns define the **overall structure of a system**.  
They determine how components are organized, how data flows, and how the system scales.

Below are some of the most common architectural styles used in modern software systems.

## Commonly used pattern

### 🧱 Monolithic Architecture

#### Description

A **monolithic architecture** is where the entire application is built and deployed as **a single unit**.

All components live inside the same codebase and usually share the same database.

Typical structure:

```
Frontend
Business Logic
Database
```

#### 👍🏻 Pros

- Simple to build and deploy
- Easy debugging and testing
- Good for small teams and early-stage products

#### 👎🏻 Cons

- Hard to scale specific components
- Large codebases become difficult to maintain
- Small changes require redeploying the whole application

#### Example

Early versions of:

- Facebook
- GitHub
- Shopify

Most startups begin with a monolith before evolving to distributed systems.

### 🧩 Microservices Architecture

#### Description

In **microservices architecture**, an application is split into **many small services** that operate independently.

Each service typically:

- owns its own database
- exposes APIs
- can be deployed independently

Example:

```
User Service
Order Service
Payment Service
Notification Service
```

#### 👍🏻 Pros

- Independent scaling
- Faster development for large teams
- Fault isolation between services

#### 👎🏻 Cons

- Operational complexity
- Harder debugging across services
- Network latency and distributed failures

#### Example

Companies using microservices:

- Netflix
- Amazon
- Uber

### 🔗 Service-Oriented Architecture (SOA)

#### Description

**SOA** organizes systems as **loosely coupled services** that communicate through a centralized communication layer such as an **Enterprise Service Bus (ESB)**.

```
Client Applications
 │
Enterprise Service Bus
 │
Multiple Services
```

#### 👍🏻 Pros

- Service reuse across systems
- Centralized integration
- Good for enterprise ecosystems

#### 👎🏻 Cons

- ESB becomes a bottleneck
- Centralized failure risk
- Hard to scale compared to microservices

#### Example

Used heavily in:

- Large enterprise systems
- Banking infrastructure
- Government platforms

### 📡 Event-Driven Architecture (EDA)

#### Description

In **Event-Driven Architecture**, services communicate by **producing and 👎🏻 Consuming events**.

Instead of calling services directly, components react to events.

Example flow:

```
Order Created Event
 ↓
Payment Service
 ↓
Inventory Service
 ↓
Shipping Service
```

#### 👍🏻 Pros

- Highly scalable
- Loosely coupled services
- Enables asynchronous processing

#### 👎🏻 Cons

- Harder debugging
- Event ordering challenges
- Eventual 👎🏻 Consistency issues

#### Example

Technologies commonly used:

- Apache Kafka
- RabbitMQ
- AWS EventBridge

### 🧱 Layered / N-Tier Architecture

#### Description

A **Layered architecture** separates the application into logical layers, each with a specific responsibility.

Typical layers:

```
Presentation Layer
Business Logic Layer
Data Access Layer
Database
```

Each layer communicates only with the adjacent layer.

#### 👍🏻 Pros

- Clear separation of responsibilities
- Easy to maintain
- Well understood architecture

#### 👎🏻 Cons

- Too many layers can slow development
- Data may pass through unnecessary layers

#### Example

Most traditional:

- enterprise applications
- Java Spring applications
- .NET MVC systems

### 🔌 Hexagonal Architecture (Ports & Adapters)

#### Description

**Hexagonal Architecture** separates the **core business logic** from external systems.

External systems connect through **ports and adapters**.

```
Core Domain
 ↑
Ports
 ↑
Adapters (API, DB, UI)
```

The core system does not depend on infrastructure.

#### 👍🏻 Pros

- Highly testable
- Framework independent
- Flexible integrations

#### 👎🏻 Cons

- Extra abstraction layers
- More complex initial setup

#### Example

Often used in:

- Domain-driven design systems
- Complex backend services

### 🧭 Clean Architecture

#### Description

Clean Architecture organizes systems into **concentric layers** where dependencies always point inward.

```
Entities
Use Cases
Interface Adapters
Frameworks & Drivers
```

The core business logic remains isolated from infrastructure.

#### 👍🏻 Pros

- Strong separation of concerns
- Testable business logic
- Long-term maintainability

#### 👎🏻 Cons

- Steeper learning curve
- More boilerplate code

#### Example

Popular in:

- enterprise backend systems
- large-scale domain-driven systems

### 🧅 Onion Architecture

#### Description

Onion Architecture is similar to Clean Architecture but emphasizes **domain models at the center**.

```
Domain Model
Domain Services
Application Services
Infrastructure
```

Dependencies always move **toward the core domain**.

#### 👍🏻 Pros

- Domain-focused design
- Strong separation of infrastructure
- Encourages maintainable systems

#### 👎🏻 Cons

- More architectural complexity
- Can slow early development

#### Example

Common in:

- Domain-driven design projects
- enterprise applications

### ☁️ Serverless Architecture

#### Description

Serverless architecture allows developers to run code **without managing servers**.

Functions execute only when triggered.

Example:

```
API Gateway
 ↓
Cloud Functions
 ↓
Database / Storage
```

#### 👍🏻 Pros

- Automatic scaling
- No server management
- Pay-per-use pricing

#### 👎🏻 Cons

- Cold start latency
- Vendor lock-in
- Limited runtime control

#### Example

Platforms:

- AWS Lambda
- Azure Functions
- Google Cloud Functions

### 🚀 Space-Based Architecture

#### Description

Space-Based Architecture is designed to eliminate database bottlenecks by using **in-memory data grids**.

Data and processing are distributed across multiple nodes.

```
Processing Units
 ↓
In-Memory Data Grid
 ↓
Replicated Storage
```

#### 👍🏻 Pros

- Extremely scalable
- High performance
- Eliminates central database bottlenecks

#### 👎🏻 Cons

- Complex architecture
- Memory-heavy infrastructure
- Less common knowledge among developers

#### Example

Used in:

- high-frequency trading platforms
- large-scale financial systems

## 🧠 Architecture Decision Cheat Sheet

Choosing an architecture is about **matching the system's needs with the strengths of the pattern**.

There is no universally “best” architecture. The best choice depends on:

- system size
- team size
- scaling requirements
- domain complexity
- operational maturity

Use the table below as a quick reference.

| Scenario                                 | Recommended Architecture            | Why                                                      |
| ---------------------------------------- | ----------------------------------- | -------------------------------------------------------- |
| Startup MVP                              | Monolithic Architecture             | Fast to build, simple deployment, minimal infrastructure |
| Small to Medium Web Apps                 | Layered / N-Tier Architecture       | Clear separation between UI, business logic, and data    |
| Large Product with Multiple Teams        | Microservices Architecture          | Independent development and deployment                   |
| Enterprise Systems Integration           | Service-Oriented Architecture (SOA) | Enables reuse of shared services across systems          |
| High Scalability with Async Workflows    | Event-Driven Architecture           | Services react to events and scale independently         |
| Domain-Heavy Business Systems            | Clean Architecture                  | Keeps business rules isolated and maintainable           |
| Domain-Driven Design Projects            | Onion Architecture                  | Strong focus on domain model at the center               |
| Systems with Many External Integrations  | Hexagonal Architecture              | Makes infrastructure replaceable via adapters            |
| Highly Variable Workloads                | Serverless Architecture             | Automatic scaling and pay-per-execution                  |
| Extreme Throughput / Low Latency Systems | Space-Based Architecture            | Avoids database bottlenecks using in-memory grids        |

### ⚡ Quick Mental Model

If you're unsure which architecture to choose, use this simple rule of thumb:

**Start simple, evolve when necessary.**

Typical evolution of many real systems:

```
Monolith
   ↓
Layered Architecture
   ↓
Microservices
   ↓
Event-Driven Systems
```

Most companies **do not start with microservices**.  
They grow into them as the system and team scale.

:::tip
Architecture should solve a **real problem**, not just follow trends.

Many successful systems run for years as a well-structured monolith before moving to distributed architectures.
:::
