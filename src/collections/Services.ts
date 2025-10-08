import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'price', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Basic', value: 'basic' },
        { label: 'Premium', value: 'premium' },
        { label: 'VIP', value: 'vip' },
        { label: 'Personnalisé', value: 'custom' },
      ],
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Prix (€)',
    },
    {
      name: 'originalPrice',
      type: 'number',
      label: 'Prix barré (€)',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
        {
          name: 'included',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'popular',
      type: 'checkbox',
      label: 'Forfait populaire',
      defaultValue: false,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Actif', value: 'active' },
        { label: 'Inactif', value: 'inactive' },
        { label: 'Bientôt disponible', value: 'coming-soon' },
      ],
      defaultValue: 'active',
    },
    {
      name: 'deliveryTime',
      type: 'text',
      label: 'Délai de livraison',
    },
    {
      name: 'support',
      type: 'group',
      fields: [
        {
          name: 'email',
          type: 'checkbox',
          label: 'Support email',
        },
        {
          name: 'phone',
          type: 'checkbox',
          label: 'Support téléphonique',
        },
        {
          name: 'priority',
          type: 'checkbox',
          label: 'Support prioritaire',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
