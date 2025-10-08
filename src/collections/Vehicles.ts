import type { CollectionConfig } from 'payload'

export const Vehicles: CollectionConfig = {
  slug: 'vehicles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'brand', 'model', 'year', 'price', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
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
      name: 'brand',
      type: 'text',
      required: true,
    },
    {
      name: 'model',
      type: 'text',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      name: 'mileage',
      type: 'number',
      label: 'Kilométrage',
    },
    {
      name: 'fuel',
      type: 'select',
      options: [
        { label: 'Essence', value: 'essence' },
        { label: 'Diesel', value: 'diesel' },
        { label: 'Hybride', value: 'hybride' },
        { label: 'Électrique', value: 'electrique' },
      ],
    },
    {
      name: 'transmission',
      type: 'select',
      options: [
        { label: 'Manuelle', value: 'manuelle' },
        { label: 'Automatique', value: 'automatique' },
      ],
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
      label: "Prix d'origine (€)",
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Disponible', value: 'disponible' },
        { label: 'Réservé', value: 'reserve' },
        { label: 'Vendu', value: 'vendu' },
        { label: "En cours d'import", value: 'import' },
      ],
      defaultValue: 'disponible',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      name: 'location',
      type: 'group',
      fields: [
        {
          name: 'country',
          type: 'text',
          defaultValue: 'Allemagne',
        },
        {
          name: 'city',
          type: 'text',
        },
      ],
    },
    {
      name: 'importInfo',
      type: 'group',
      fields: [
        {
          name: 'importDate',
          type: 'date',
        },
        {
          name: 'deliveryTime',
          type: 'text',
          label: 'Délai de livraison',
        },
        {
          name: 'importCosts',
          type: 'number',
          label: "Frais d'import (€)",
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
