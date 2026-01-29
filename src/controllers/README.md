# API Controllers Documentation

This directory contains centralized API controllers for making HTTP requests to the backend. Each controller handles a specific domain (Products, Services, Demo Projects, Pricing, Team).

## Available Controllers

- **productsController** - Manage products
- **servicesController** - Manage services and service categories
- **demoController** - Manage demo projects and categories
- **pricingController** - Manage pricing plans and categories
- **teamController** - Manage team members and categories

## Usage

### Import Controllers

```javascript
// Import all controllers
import { 
  productsController, 
  servicesController, 
  demoController, 
  pricingController, 
  teamController 
} from '@/controllers';

// Or import specific controller
import productsController from '@/controllers/productsController';
```

### Example Usage

#### Products Controller

```javascript
import { productsController } from '@/controllers';

// Get all products
const fetchProducts = async () => {
  try {
    const result = await productsController.getProducts();
    console.log(result.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Create a product
const createProduct = async () => {
  try {
    const productData = {
      slug: 'my-product',
      title: 'My Product',
      tagline: 'Amazing product',
      description: 'Product description',
      coverImage: 'https://example.com/image.jpg',
      highlights: ['Feature 1', 'Feature 2'],
      features: [{ title: 'Feature', description: 'Description' }],
      cta: { text: 'Learn More', link: '/product' },
      theme: { primary: '#000000' },
      status: 'active'
    };
    
    const result = await productsController.createProduct(productData);
    console.log('Created:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Update a product
await productsController.updateProduct(productId, updatedData);

// Delete a product
await productsController.deleteProduct(productId);
```

#### Services Controller

```javascript
import { servicesController } from '@/controllers';

// Get all categories
const categories = await servicesController.getCategories();

// Get all services
const services = await servicesController.getServices();

// Create a service category
const categoryData = {
  name: 'Web Development',
  slug: 'web-development',
  description: 'Web development services',
  order: 1
};
await servicesController.createCategory(categoryData);

// Create a service
const serviceData = {
  name: 'Custom Website',
  categoryId: 'web-development',
  description: 'Build custom websites',
  price: 5000,
  features: ['Responsive', 'SEO Optimized']
};
await servicesController.createService(serviceData);

// Update a service
await servicesController.updateService(serviceId, updatedData);

// Delete a service
await servicesController.deleteService(serviceId);
```

#### Demo Controller

```javascript
import { demoController } from '@/controllers';

// Get all categories
const categories = await demoController.getCategories();

// Get projects by category
const projects = await demoController.getProjects(categoryId);

// Create a project
const projectData = {
  title: 'E-commerce App',
  description: 'Mobile shopping app',
  tags: ['React Native', 'E-commerce'],
  thumbnail: 'https://example.com/thumb.jpg',
  previewUrl: 'https://example.com/demo',
  isFeatured: true,
  order: 1
};
await demoController.createProject(categoryId, projectData);

// Update a project
await demoController.updateProject(categoryId, projectId, updatedData);

// Delete a project
await demoController.deleteProject(categoryId, projectId);
```

#### Pricing Controller

```javascript
import { pricingController } from '@/controllers';

// Get all categories
const categories = await pricingController.getCategories();

// Get all plans
const plans = await pricingController.getPlans();

// Get plans by category
const categoryPlans = await pricingController.getPlansByCategory(categoryId);

// Create a pricing plan
const planData = {
  name: 'Pro Plan',
  categoryId: 'web-development',
  price: 99,
  currency: 'USD',
  billingPeriod: 'monthly',
  features: ['Feature 1', 'Feature 2'],
  isPopular: true
};
await pricingController.createPlan(planData);

// Update a plan
await pricingController.updatePlan(planId, updatedData);

// Delete a plan
await pricingController.deletePlan(planId);
```

#### Team Controller

```javascript
import { teamController } from '@/controllers';

// Get all categories
const categories = await teamController.getCategories();

// Get all members
const members = await teamController.getMembers();

// Get members by category
const categoryMembers = await teamController.getMembersByCategory(categoryId);

// Create a team member
const memberData = {
  name: 'John Doe',
  role: 'CEO',
  categoryId: 'leadership',
  bio: 'Experienced leader',
  image: 'https://example.com/photo.jpg',
  social: {
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe'
  }
};
await teamController.createMember(memberData);

// Update a member
await teamController.updateMember(memberId, updatedData);

// Delete a member
await teamController.deleteMember(memberId);
```

## Error Handling

All controller methods throw errors that should be caught:

```javascript
try {
  const result = await productsController.getProducts();
  // Handle success
} catch (error) {
  console.error('Error:', error.message);
  // Handle error - show notification, etc.
}
```

## Component Integration Example

```javascript
"use client";

import { useState, useEffect } from 'react';
import { servicesController } from '@/controllers';

export default function ServicesComponent() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const result = await servicesController.getServices();
      if (result.success) {
        setServices(result.data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (serviceId) => {
    try {
      await servicesController.deleteService(serviceId);
      fetchServices(); // Refresh list
    } catch (error) {
      alert('Failed to delete service');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {services.map(service => (
        <div key={service._id}>
          <h3>{service.name}</h3>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
```

## API Response Format

All controllers return responses in this format:

```javascript
{
  success: true,
  message: "Operation successful",
  data: { /* response data */ }
}
```

## Authentication

All API calls automatically include credentials (cookies) for authentication. Make sure the user is logged in for protected endpoints.

## Configuration

The base URLs are configured in each controller file. To change the backend URL, update the `API_BASE_URL` constant in each controller:

```javascript
const API_BASE_URL = 'http://localhost:4000/api/services';
```

For production, consider using environment variables:

```javascript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL + '/services';
```
